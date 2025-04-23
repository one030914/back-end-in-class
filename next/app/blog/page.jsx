import { blogPost } from "@/app/data/blog/blogPosts";
import { users } from "@/app/data/blog/users";
import Link from "next/link";

const posts = blogPost;

export default function Page() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">
                Tech blogs <span className="text-2xl text-stone-500">{posts.length}</span> pages
            </h1>
            <div className="grid gap-4">
                {posts.map((post) => {
                    const user = users[post.userId - 1];
                    return (
                        <div key={post.id} className="p-4 shadow-lg rounded-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <img
                                    src={user.avatar}
                                    alt={`User ${post.userId}'s avatar`}
                                    className="w-10 h-10 rounded-full"
                                />
                                <Link href={`/blog/users/${user.id}`}>
                                    <span className="text-gray-500 hover:bg-blue-300">
                                        Author #{user.id}: {user.name}
                                    </span>
                                </Link>
                            </div>
                            <Link href={`/blog/posts/${post.id}`}>
                                <span className="text-gray-500 hover:bg-green-300">{`${post.id}: ${post.title}`}</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
