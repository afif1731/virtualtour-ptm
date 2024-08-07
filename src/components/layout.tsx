import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  title?: string
  desc?: string
}

export default function Layout({
  children,
  title = 'default',
  desc = 'default'
}: LayoutProps) {

  return (
    <div>
      <Head>
        <title>{`${title} | Pesantren Teknologi Majapahit`}</title>
        <link rel='shortcut icon' href='/images/favicon.ico' />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='description' content={desc}/>
        <meta lang='id'/>
      </Head>
      {children}
    </div>
  )
}
