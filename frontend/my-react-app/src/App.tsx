import './index.css'
// import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { Routes, Route } from 'react-router-dom';
import './builder-registry';


builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY!);


function App() {
// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found, 
      // set the document title
      if (content?.data.title) {
      document.title = content.data.title
      }
    }
    fetchContent();
  }, []);
  
  // If no page is found, return 
  // a 404 page from your code.
  if (notFound && !isPreviewingInBuilder) {
    return <div>Not Found 404 Error</div>
  }
  
  return (
    <Routes>
      <Route path="/*" element={content && <BuilderComponent model="page" content={content} />}/>
    </Routes>
  );
}

export default App
