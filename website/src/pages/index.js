import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Wut, Poppers?</h2>
    <p>
      A <strong>popper</strong> is an element that "pops out" of the normal flow
      of the document and gets overlaid on top of the existing UI without
      disrupting the flow of content, while being positioned next to a given
      reference (or trigger) element. Common UI elements include:
    </p>
    <ul>
      <p>Tooltips</p>
      <p>Popovers</p>
      <p>Dropdowns</p>
      <p>Comboboxes</p>
    </ul>
    <Link to="/getting-started/">Getting Started -></Link>
  </Layout>
);

export default IndexPage;
