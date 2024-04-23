import { authOptions } from '../../libs/authOptions';
// 9af45af687df32af1ebdeb6b60bc3c35
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}
