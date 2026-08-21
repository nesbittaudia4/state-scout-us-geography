import {createHmac,timingSafeEqual} from 'crypto';
const secret=process.env.TEACHER_SESSION_SECRET||'';
export function session(){return secret?createHmac('sha256',secret).update('state-scout-teacher').digest('hex'):''}
export function allowed(value?:string){const s=session();return !!value&&!!s&&value.length===s.length&&timingSafeEqual(Buffer.from(value),Buffer.from(s))}
