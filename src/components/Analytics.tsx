import Script from 'next/script'

export function Analytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-R47RYY2V61`}
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        id="Google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R47RYY2V61');`,
        }}
      />
    </>
  )
}
