import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
        <script>
           {` alert("Well to contact page");`}
        </script>
      I am contact
    </div>
  )
}

export default contact


export const metadata = {
    title: "contact Facebook - Connect with the world",
    description: "This is a page whrer you can contact facebook and we can connect with the using facebook",
  };
