import { blogPost } from "@/app/data/blog/blogPosts";
import { users } from "@/app/data/blog/users";
import { notFound } from "next/navigation";
import Link from "next/link"

export default async function Page({params}){
    const {userId} = await params;
    const user = users.find((user) => user.id === Number(userId));

    if(!user) return notFound();
    const posts = blogPost.filter((post) => post.userId === user.id);

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center gap-3 mb-6">
                <img src={user.avatar} alt={`User ${user.id}'s avatar`} className="w-10 h-10 rounded-full"/>
                <p className="text-xl mb-6">{user.name}</p>
            </div>
            <h1 className="text-3xl font-bold mb-6">Tech blogs <span className="text-2xl text-stone-500">{posts.length}</span> pages</h1>
            <div className="grid gap-4">
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="p-4 shadow-lg rounded-lg">
                            <Link href={`/blog/posts/${post.id}`}>
                                <span className="text-blue-700 hover:font-bold">{`${post.id}: ${post.title}`}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}