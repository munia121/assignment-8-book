/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { getStoredList } from '../Components';


const ReadPages = () => {

    const readPageData = useLoaderData()
    const [localData, setLocalData] = useState([])

    console.log(localData)

    useEffect(() => {
        const storedData = getStoredList();
        const filter = storedData.filter(book => getStoredList(book))
        setLocalData(filter)
    }, [readPageData])





    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
       C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
       C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
       Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };




    return (
        <div className='flex justify-center mt-20'>
            <ResponsiveContainer width={'100%'} height={500}>
                <BarChart  data={localData}>
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Tooltip></Tooltip>
                    <Bar dataKey="totalPages" fill="#8884d8"
                        shape={<TriangleBar />} />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default ReadPages;