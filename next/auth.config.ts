import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const params = {
    prompt: "consent",
    access_type: "offline",
    response_type: "code",
};

const authOptions = {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: params,
            },
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            authorization: {
                params: params,
            },
        }),
    ],
};

export default authOptions;
