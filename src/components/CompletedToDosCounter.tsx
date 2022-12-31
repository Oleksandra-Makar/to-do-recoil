import { List, ListItemText, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { todoListInfo } from '../selectors'

const CompletedToDosCounter = () => {
    const { totalCompletedNum, totalNum } = useRecoilValue(todoListInfo)

    return (
        <Typography style={{ textAlign: 'center' }} variant="h4">
            <List>
                <ListItemText>Total to-dos: {totalNum}</ListItemText>
                <ListItemText>Total completed to-dos: {totalCompletedNum}</ListItemText>
            </List>
        </Typography>
    )
}

export default CompletedToDosCounter
