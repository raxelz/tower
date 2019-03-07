import {
    createStyles,
    Paper,
    Theme,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import * as React from 'react';
import {UserLabel} from './UserLabel';
import {UserSummary} from './UserSummary';
import {UserDataHeader} from './UserDataHeader';
import {UserDataFooter} from './UserDataFooter';
import {UserDocument} from './UserDocument';

export interface TableHeaderItemInterface {
    key: string;
    alignRight: boolean;
    label: string;
}

export interface UserDataProps {
    addNewLabel: () => void;
    editLabel: (key: string, value: string, scope: string) => void;
    changeLabelName: (value: string) => void;
    changeLabelScope: (value: string) => void;
    changeLabelValue: (value: string) => void;
    closeModal: () => void;
    deleteUserLabel: (uid: string, key: string, scope: string) => void;
    handleChangeUserState: (e: any) => void;
    handleChangeRole: (e: any) => void;
    handleChangeUserOTP: (e: any) => void;
    newLabelName: string;
    newLabelScope: string;
    newLabelValue: string;
    isAddLabelModalOpened: boolean;
    isEditLabelModalOpened: boolean;
    openAddLabelModal: () => void;
    openEditLabelModal: (key: string, value: string, scope: string) => void;
    user: any;
    page: number;
    rowsPerPage: number;
    handleChangePage: (page: any) => void;
    documentsRows: TableHeaderItemInterface[];
    showMore: boolean;
    showMoreUserInfo: (e: any) => void;
}

const styles = (theme: Theme) => createStyles({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '75%',
    },
    menu: {
        width: 200,
    },
    label: {
        height: 40,
        paddingLeft: 16,
        borderRadius: 24,
        width: 'auto',
        cursor: 'pointer',
    },
    icon: {
        width: 32,
        height: 32,
        margin: 4,
        cursor: 'pointer',
    },
    labelName: {
        paddingTop: 8,
        color: '#ffffff',
        fontSize: 16,
        marginRight: 7,
    },
});

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

type Props = StyleProps & UserDataProps;

class UserDataComponent extends React.Component<Props> {

    public render() {
        const {
            classes,
            user,
            newLabelName,
            newLabelValue,
            newLabelScope,
            addNewLabel,
            editLabel,
            deleteUserLabel,
            changeLabelName,
            changeLabelScope,
            changeLabelValue,
            isAddLabelModalOpened,
            isEditLabelModalOpened,
            openAddLabelModal,
            openEditLabelModal,
            closeModal,
            page,
            handleChangeUserState,
            handleChangeRole,
            handleChangeUserOTP,
            handleChangePage,
            documentsRows,
            showMore,
            showMoreUserInfo,
        } = this.props;

        return (
            <div className="user-data">
                <UserDataHeader classes={classes}/>

                <Paper style={{padding: 20, marginBottom: 15}}>
                    <UserSummary
                        classes={classes}
                        user={user}
                        handleChangeUserState={handleChangeUserState}
                        handleChangeRole={handleChangeRole}
                        handleChangeUserOTP={handleChangeUserOTP}
                        showMore={showMore}
                        showMoreUserInfo={showMoreUserInfo}
                    />
                    <UserLabel
                        classes={classes}
                        user={user}
                        newLabelName={newLabelName}
                        newLabelValue={newLabelValue}
                        newLabelScope={newLabelScope}
                        addNewLabel={addNewLabel}
                        editLabel={editLabel}
                        deleteUserLabel={deleteUserLabel}
                        changeLabelName={changeLabelName}
                        changeLabelScope={changeLabelScope}
                        changeLabelValue={changeLabelValue}
                        isAddLabelModalOpened={isAddLabelModalOpened}
                        isEditLabelModalOpened={isEditLabelModalOpened}
                        openAddLabelModal={openAddLabelModal}
                        openEditLabelModal={openEditLabelModal}
                        closeModal={closeModal}
                    />
                    <UserDocument
                        user={user}
                        page={page}
                        handleChangePage={handleChangePage}
                        documentsRows={documentsRows}
                    />
                </Paper>
                <UserDataFooter user={user}/>
            </div>
        );
    }
}

export const UserData = withStyles(styles)(UserDataComponent);
