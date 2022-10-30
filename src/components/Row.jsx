import axios from 'axios';
import React from 'react';
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import Movie from './Movie';

const Row = ({title, fetchURL, rowId}) => {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results);
        })
    }, [fetchURL]);

    const scrollLeft = () => {
        var scroll = document.getElementById('slider' + rowId);
        scroll.scrollLeft = scroll.scrollLeft - 500;
    }

    const scrollRight = () => {
        var scroll = document.getElementById('slider' + rowId);
        scroll.scrollLeft = scroll.scrollLeft + 500;
    }

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={scrollLeft} 
                className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40}
            />
            <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight onClick={scrollRight} 
                className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40}
            />
        </div>
    </>
  )
}

export default Row