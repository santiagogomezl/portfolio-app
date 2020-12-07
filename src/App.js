import React, {Component} from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
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
          site:'https://santiagogomezl.github.io/quiz-app/'
        },
        {
          id: 1,
          name: 'Simple Product App',
          details: 'Launch your next product or idea. Gather feedback and results for your future enterprise. The Simple Product App features an admin dashboard to create and update products, upload images and define your store information. The back-end API is built on Express and Postgres.',
          technologiesIds: [ 2, 4, 5],
          logo: 'spa-logo.png',
          repo:'https://github.com/santiagogomezl/simple-product-app',
          site:'https://simple-product-app.vercel.app/'
        },
        {
          id: 1,
          name: 'IT Manager App',
          details: 'Manage your IT resources with ease - no more spreadsheets. The IT Manager App is a cloud-based app that allows you to access your resources anywhere, whether on your desktop or mobile device. Add and manage users, create tasks and allocate IT resources. ' ,
          technologiesIds: [ 2, 4, 5],
          logo: 'itm-logo.png',
          repo:'https://github.com/santiagogomezl/it-manager-app',
          site:'https://it-manager-app.vercel.app/'
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

    return(
      <BrowserRouter>
        <Header/>
        <main className='App'>
          <Switch>
            <Route exact path='/' render={props => <Home {...this.state}/>}/>
            <Route path={'*'} component={NotFound} />
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    )

  }

}

export default App;


