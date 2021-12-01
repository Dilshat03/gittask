import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import Layout from "../layaout";
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";

const Repositories = () => {
    const [repos, setRepos] = useState([])
    const {id} = useParams()

    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)


    useEffect(() => {
        const FetchData = async () => {
            try {
                const {data} = await axios(`https://api.github.com/orgs/${id}/repos`,)
                setRepos(data)
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        }
        FetchData()
    }, [id])


    if (isLoading) {
        return <Spinner/>
    }
    if (notFound) {
        return <NotFound/>
    }


    return (
        <Layout>
            <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Repos name
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Created at
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Readme.md
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Stargazers-count
                                    </th>
                                    <th scope="col"
                                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal">
                                        Watchers-count
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    repos.map(el =>
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {el.name}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {el.created_at.slice(0, 10)}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true"
                                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                    </span>
                                    <Link className="relative" to={`/${id}/${el.name}`}>
                                        Readme.md
                                    </Link>
                                </span>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {el.stargazers_count}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {el.watchers_count}
                                                    </p>
                                                </td>
                                            </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    );
};

export default Repositories;