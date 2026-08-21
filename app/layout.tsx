import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'State Scout | US Geography Missions',description:'A shared US geography adventure for 3rd grade explorers.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
