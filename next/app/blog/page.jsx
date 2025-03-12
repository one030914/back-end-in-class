import { blogPost } from "@/app/data/blog/blogPosts"
import { avatar } from "@/app/data/blog/avatar"
import Link from "next/link"

const posts = blogPost;
const users = avatar;

export default function Page(){
    return(
        <div>
            <h1>tech blogs {posts.length}</h1>
            <div>
                {posts.map((post) => {
                    const user = users[post.userId - 1];
                    return (
                        <div key={post.postId}>
                            <div>
                                <img src={user.avatar} alt={`User ${post.userId}'s avatar`} className="w-10 h-10 rounded-full"/>
                                <Link href={`/blog/posts/${post.postId}`}>
                                    {`${post.postId}: ${post.title}`}
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}