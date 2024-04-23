import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';


export const authOptions = {
    providers: [
        FacebookProvider({
          clientId: "521912833091319",
          clientSecret: "9af45af687df32af1ebdeb6b60bc3c35"
        }),
    ],
}
// 9af45af687df32af1ebdeb6b60bc3c35

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
