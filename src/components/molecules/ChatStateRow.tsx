import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { modalState, userIdState } from '../../modules/recoilAtoms/modalAtom';
import { ChatStatusTypes } from '../../types/MainTypes';
import DefaultText from '../atoms/DefaultText';

const ChatStateRow = React.memo(
    ({ name, statusMessage, targetUserId }: ChatStatusTypes) => {
        const setOnModal = useSetRecoilState<boolean>(modalState);
        const setTargetUserId = useSetRecoilState<number | null>(userIdState);
        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLDivElement>, id: number | null) => {
                if (id) setTargetUserId(id);
                setOnModal(true);
            },
            [setTargetUserId, setOnModal],
        );

        return (
            <Container
                onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    handleClick(e, targetUserId)
                }
            >
                <DefaultText text={name} bold />
                <DefaultText text={statusMessage} size="small" />
            </Container>
        );
    },
);

export default ChatStateRow;

const Container = styled.div`
    display: flex;
    /* background-color: ${colors.black}; */
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.8rem 2rem;
    row-gap: 0.4rem;
    cursor: pointer;
`;
