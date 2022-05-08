const About = () => {
  return (
      <>
        <h1 className='text-6xl mb-4'>Github Finder</h1>
        <p className='mb-4 text-2xl font-light'>
          A React app to search GitHub profiles and see profile details. This
          project is part of the
          <a href='src/pages/About'>
            {' '}
            React Front To Back
          </a>{' '}
          Udemy course by
          <strong>
            <a href='https://github.com/vaskania'> Vaska Nikabadze</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By: Guja Schwarzmüller
        </p>
      </>
  );
};

export default About;