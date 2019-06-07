import React, { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import {
  POSTS_QUERY,
  USERS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION
} from '../../graphql'
import Post from '../../components/Post/Post'
import classes from './App.module.css'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


let unsubscribe = null

class App extends Component {
  state = {
    formAuthor: '',
    formTitle: '',
    formBody: ''
  }

  handleFormSubmit = e => {
    e.preventDefault()

    const { formTitle, formBody, formAuthor } = this.state

    if (!formTitle || !formBody || !formAuthor) return
    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: formAuthor,
      }
    })

    this.setState({
      formAuthor: '',
      formTitle: '',
      formBody: ''
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="author" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>
                        <Query query={USERS_QUERY}>
                          
                            {({ loading, error, data, subscribeToMore }) => {
                              if (loading) return <p>Loading...</p>
                              if (error) return <p>Error</p>
                              let users = data.users.map((user, key) => (
                                <MenuItem value={user.id} key = {key}>{user.name}</MenuItem>))
                              return(
                                <Select 
                                value = {this.state.formAuthor}
                                onChange={e =>
                                  this.setState({ formAuthor: e.target.value })
                                }
                                className = {classes.select}
                                >
                                  {users}
                                </Select>
                              )
                            }}
                          
                        </Query>  
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                )
              }}
            </Mutation>
          </Col>
          
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>
                if (error) return <p>Error :(((</p>
                
                let all_users = 
                data.posts.map( post => (
                  post.author.name
                )) 
                all_users = [...new Set(all_users)]
                

                const posts = 
                all_users.map( user => (
                  data.posts.filter(post => (
                    user === post.author.name
                  ))                  
                ))

                let postByAuthor = 
                posts.map( (userPosts, key) => (
                  <ExpansionPanel key = {key}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.expandTitle}>
                        {userPosts[0].author.name} ({userPosts.length} Posts)
                      </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div>
                        {userPosts.map( (post,id) => (
                          <Post data={post} key={id}/>
                        ))}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                ))              
                
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev
                      const newPost = subscriptionData.data.post.data

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      }
                    }
                  })

                return <div>{postByAuthor}</div>
              }}
            </Query>
            
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
