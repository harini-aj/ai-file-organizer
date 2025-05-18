import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import { fetchAllFiles } from '../store/fileSlice';
import FileListView from '../components/FileListView/FileListView';
import { QueryPane } from '../components/QueryPane/QueryPane';
import './Home.css'
import { RootState, AppDispatch } from '../store/store';
import { useEffect } from 'react';

const Home: React.FC = () => {
    const state = useSelector((state: RootState) => state);
    const { files } = state;

    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchAllFiles())
    }, [dispatch])

    const onUploadComplete = () => {
        dispatch(fetchAllFiles());
    }

    useEffect(() => {
        console.log("Files in state:", files);
    }, [files]);

    return (
        <>
        <Header onUploadComplete={onUploadComplete}></Header>
        <div className="main">
            <section className='file-list'>
            {
                <FileListView files={ files.data }/>
            }
            </section>
            <section className='centre'>
                <section className='preview-pane'>
                    <div>Preview Pane</div>
                </section>
                <section className='query-pane'>
                    <QueryPane/>
                </section>
            </section>
        </div>
        </>
    );
};

export default Home;
