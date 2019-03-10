import { Typography } from '@material-ui/core';
import * as React from 'react';
import { InfoTable } from '../../InfoTable';
import { TableHeaderItemInterface } from '../index';

export interface UserDocumentProps {
    // tslint:disable-next-line:no-any
    user: any;
    page: number;
    // tslint:disable-next-line:no-any
    handleChangePage: (page: any) => void;
    documentsRows: TableHeaderItemInterface[];
}

export class UserDocument extends React.Component<UserDocumentProps> {
    public render() {
        const {user, page} = this.props;
        const content = user && user.documents && user.documents.length ? (
            <InfoTable
                dataLength={this.props.documentsRows.length}
                rows={this.props.documentsRows}
                data={user.documents}
                page={page}
                rowsPerPage={user.documents.length}
                handleChangePage={this.props.handleChangePage}
                hidePagination={true}
            />) : (
            <Typography variant="h6" gutterBottom={true} component="h6" style={{color: '#757575'}}>
                No documents
            </Typography>
        );

        return (
            <React.Fragment>
                <Typography
                    variant="h5"
                    gutterBottom={true}
                    component="h5"
                    style={{marginTop: 40}}
                >
                    Documents
                </Typography>
                {content}
            </React.Fragment>
        );
    }
}
