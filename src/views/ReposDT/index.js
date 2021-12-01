import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../layaout";
import axios from "axios";
import Markdown from 'markdown-to-jsx';
import Spinner from "../../components/Spinner";
import NotReadme from "../../components/NotReadme";


const ReposDT = () => {
    const {id,project} = useParams()
    const [readme,setReadme]=useState('')

    const [isLoading, setIsLoading] = useState(true)
    const [notReadme, setNotReadme] = useState(false)


    useEffect(()=>{

        const FetchData = async () => {
          try {
              const {data} = await axios(`https://api.github.com/repos/${id}/${project}/readme`,
                  {headers: { 'Accept': 'application/vnd.github.raw' }})
              setReadme(data)
          } catch (e) {
              setNotReadme(true)
          } finally {
              setIsLoading(false)
          }
        }
        FetchData()
    },[id,project])

    if (isLoading) {
        return <Spinner />
    }
    if (notReadme) {
        return <NotReadme />
    }
    return (
        <Layout>
            <div className="p-6">
                <Markdown className='readme'>{readme}</Markdown>
            </div>
        </Layout>
    );
};

export default ReposDT;