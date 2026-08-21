import {NextResponse} from 'next/server';import {parks} from '../../data';
export async function GET(){return NextResponse.json({units:parks,source:'Curated National Park Service learning library. Add NPS_API_KEY to sync the complete official catalog.'})}
