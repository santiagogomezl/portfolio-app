import React, {Component} from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import portfolioContext from './portfolioContext'
import Header from './Header/Header'
import Home from './Home/Home'
import MyWork from './MyWork/MyWork'
import Footer from './Footer/Footer'
import NotFound from './NotFound/NotFound'
import './App.css'


class App extends Component{



    state = {
      portfolio: [
        {
          id: 1,
          name: 'Tiger King Trivia App',
          details: `The Tiger King Trivia App is a quiz application with multiple-choice questions designed for true Tiger King fanatics. It was built to showcase responsive and dynamic web design with Javascript and JQuery. Based on the the popular Netflix series Tiger King. `,
          technologiesIds: [ 1, 2, 3],
          logo: 'tkt-logo.png',
          repo:'https://github.com/santiagogomezl/quiz-app',
          site:'https://santiagogomezl.github.io/quiz-app',
          images:[
            {
              img: 'tkt-one.gif',
              caption: 'Tiger King Trivia App'
            },
            {
              img: 'tkt-two.png',
              caption: 'Questions and feedback'
            },
            {
              img: 'tkt-three.png',
              caption: 'Review your final score and play again'
            },
            {
              img: 'tkt-mobile-one.gif',
              caption: 'Mobile layout'
            },
            {
              img: 'tkt-mobile-two.gif',
              caption: 'Mobile layout'
            },
          ]
        },
        {
          id: 2,
          name: 'Simple Product App',
          details: 'Launch your next product or idea. Gather feedback and results for your future enterprise. The Simple Product App features an admin dashboard to create and update products, upload images and define your store information. The back-end API is built on Express and Postgres.',
          technologiesIds: [ 2, 4, 5],
          logo: 'spa-logo.png',
          repo:'https://github.com/santiagogomezl/simple-product-app',
          site:'https://simple-product-app.vercel.app',
          images:[
            {
              img: 'spa-one.gif',
              caption: 'Browse products, view product details and features'
            },
            {
              img: 'spa-two.png',
              caption: 'Store information and product snapshot'
            },
            {
              img: 'spa-three.png',
              caption: 'Compare products and all their features'
            },
            {
              img: 'spa-mobile-one.gif',
              caption: 'Manage store details'
            },
            {
              img: 'spa-mobile-two.gif',
              caption: 'Edit and create products'
            },
          ]
        },
        {
          id: 3,
          name: 'IT Manager App',
          details: 'Manage your IT resources with ease - no more spreadsheets. The IT Manager App is a cloud-based app that allows you to access your resources anywhere, whether on your desktop or mobile device. Add and manage users, create tasks and allocate IT resources. ' ,
          technologiesIds: [ 2, 4, 5],
          logo: 'itm-logo.png',
          repo:'https://github.com/santiagogomezl/it-manager-app',
          site:'https://it-manager-app.vercel.app',
          images:[
            {
              img: 'itm-one.gif',
              caption: 'Manage users, tasks and workstations'
            },
            {
              img: 'itm-two.png',
              caption: 'Review user information on the Dashboard'
            },
            {
              img: 'itm-three.png',
              caption: 'Review assigned Tasks and Task History'
            },
            {
              img: 'itm-mobile-one.gif',
              caption: 'Create users'
            },
            {
              img: 'itm-mobile-two.gif',
              caption: 'Create user tasks'
            },
          ]
        }
      ],
      technologies:[
        {
          id: 1,
          name: 'HTML5',
          faIcon: 'fa-html5',
        },
        {
          id: 2,
          name: 'CSS3',
          faIcon: 'fa-css3',
        },
        {
          id: 3,
          name: 'JS',
          faIcon: 'fa-js',
        },
        {
          id: 4,
          name: 'React',
          faIcon: 'fa-react',
        },
        {
          id: 5,
          name: 'Node.js',
          faIcon: 'fa-node-js',
        }
      ]
    }
  
  render (){

    const contextValue = {
      portfolio : this.state.portfolio,
      technologies : this.state.technologies,
    }

    return(
      <portfolioContext.Provider value={contextValue}>
        <BrowserRouter>
          <Header />
          <main className='App'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/about' component={Home}/>
              <Route path='/contact' component={Home}/>
              <Route exact path='/work' component={Home}/>
              <Route path='/work/:work_name' component={MyWork}/>
              <Route path={'*'} component={NotFound} />
            </Switch>
          </main>
          <Footer/>
        </BrowserRouter>
      </portfolioContext.Provider>
    )
  }

}

export default App;


