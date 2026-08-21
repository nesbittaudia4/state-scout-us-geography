import {NextRequest,NextResponse} from 'next/server';import {allowed,session} from '../../../lib/auth';
export const runtime='nodejs';
export async function GET(r:NextRequest){return NextResponse.json({authenticated:allowed(r.cookies.get('state_scout_teacher')?.value)})}
export async function POST(r:NextRequest){const {username,password}=await r.json() as {username?:string;password?:string};if(username!==process.env.TEACHER_USERNAME||password!==process.env.TEACHER_PASSWORD||!session())return NextResponse.json({error:'Incorrect username or password.'},{status:401});const out=NextResponse.json({authenticated:true});out.cookies.set('state_scout_teacher',session(),{httpOnly:true,secure:true,sameSite:'lax',path:'/',maxAge:43200});return out}
