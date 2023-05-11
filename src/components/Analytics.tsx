export function Analytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-R47RYY2V61`}
      />
      <script
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
