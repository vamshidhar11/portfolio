import React from 'react';
import Projects from '../projects';
import promo from '../../assets/img/projects/promo.png';
import dhub from '../../assets/img/projects/dhub.png';

const messages = {
  title: 'Featured projects'
};

const projects = [
  {
    title: 'newsApp',
    url: 'https://news-center-a8a2e.web.app/',
    description: (
      <div>
        <p>Read News of any country</p>
      </div>
    ),
    // image: 'dhub'
  },
  {
    title: 'promo',
    url: 'https://promoapp.netlify.com/',
    description: (
      <div>
        <p>
          Watch promos of New releases, add movies to watchlist. Find movies of
          your heart's content
        </p>
      </div>
    )
    // image: "promo",
    // sizes: "width:125, height:125"
  },
];

export default props => <Projects messages={messages} projects={projects} />;
