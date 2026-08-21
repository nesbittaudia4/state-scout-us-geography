const url=process.env['UPSTASH_REDIS_REST_URL']||process.env['UPSTASH_REDIS_REST_KV_REST_API_URL'];
const token=process.env['UPSTASH_REDIS_REST_TOKEN']||process.env['UPSTASH_REDIS_REST_KV_REST_API_TOKEN'];
async function cmd(parts:string[]){if(!url||!token)throw new Error('Database is not configured.');const r=await fetch(`${url}/${parts.map(encodeURIComponent).join('/')}`,{headers:{Authorization:`Bearer ${token}`},cache:'no-store'});if(!r.ok)throw new Error('Database request failed.');return r.json() as Promise<{result:unknown}>}
export async function getJson<T>(key:string):Promise<T|null>{const {result}=await cmd(['get',key]);return result?(typeof result==='string'?JSON.parse(result):result)as T:null}
export async function setJson(key:string,value:unknown){await cmd(['set',key,JSON.stringify(value)])}
