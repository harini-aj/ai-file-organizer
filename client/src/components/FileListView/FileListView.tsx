import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

export type FileListViewProps = {
    files?: string[] | null
}

const FileListView: React.FC<FileListViewProps> = ({ files }) => {
    if(!files || files.length === 0) { 
        return <p>Upload files</p>
    }
    return (
        <>
        {
            files.map((file: string, index: number) => {
                return(
                <ListItem key={index} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={file} />
                    </ListItemButton>
                </ListItem>
                )
            })
        }
        </>
    )
}

export default FileListView;