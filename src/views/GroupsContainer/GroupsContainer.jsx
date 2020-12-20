import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Container, 
  Grid,
  InputBase,
  IconButton,
  Button,
  LinearProgress
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import GifCard from '../../components/GifCard/GifCard'

import './GroupsContainer.css'

const GroupsContainer = () => {
  const [ courses, setCourses ] = useState([])
  const [ query, setQuery ] = useState(' ')
  const [ loading, setLoading ] = useState(false)
  
  
  useEffect(() => {
    console.log('Al Montar el componente');
    getCourses()
    return () => {
      console.log('Al borrar el componente');
    }
  }, [query])
  
  const getCourses = async () => {
    try {
      setLoading(true)
      const URL = `https://api.giphy.com/v1/stickers/search?q=${query}&api_key=7ejd73FIFeDTTXP814G3kYp9UameVcT7`
      const res = await axios.get(URL)
      setCourses(res.data.data)
      console.log(res.data.data);
      setLoading(false)
      console.log(courses);
    } catch (error) {
      throw new Error(error.message)
    }
  }
 

  const handleInput = (e) => {
    setQuery(e.target.value)
  }


  const showLinearProgress = () => {
    if(loading) return <LinearProgress color="secondary" />
  }


  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={12}>
            <h1>Groups: {query}</h1>
            <InputBase
              placeholder="Search for any group"
              inputProps={{ 'aria-label': 'Search for any group' }}
              onChange={handleInput}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
           <Button Link href="/NewGroup" variant="contained" color="secondary">
            Create New Group
           </Button>

            {
              showLinearProgress()
            }
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="stretch" spacing={5}>
          {
               courses.map(course => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                  <GifCard src={course.images.original.url} title={course.title} />
                </Grid>
              ))
          }
        </Grid>

      </Container>
    </React.Fragment>
  )


}

export default GroupsContainer