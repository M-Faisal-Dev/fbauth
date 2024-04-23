import NextAuth, {AuthOptions} from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';


export const authOptions : AuthOptions  = {
    providers: [
        FacebookProvider({
          clientId: "521912833091319",
          clientSecret: "9af45af687df32af1ebdeb6b60bc3c35"
        }),
    ],
}