import { blogPost } from "@/app/data/blog/blogPosts";
import { users } from "@/app/data/blog/users";
import { notFound } from "next/navigation";
import Link from "next/link";

const posts = blogPost;

export default async function Page({ params }) {
    const { postId } = await params;
    const post = posts.find((post) => post.id === Number(postId));

    if (!post) return notFound();
    const user = users[post.userId - 1];

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <img
                        src={user.avatar}
                        alt={`User ${user.id}'s avatar`}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h1>{post.title}</h1>
                        <Link
                            href={`/blog/users/${user.id}`}
                            className="text-gray-500 hover:bg-blue-300"
                        >
                            Author #{user.id}: {user.name}
                        </Link>
                    </div>
                </div>
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <article className="border bg-stone-400 rounded-lg shadow-sm">{post.content}</article>
        </div>
    );
}
