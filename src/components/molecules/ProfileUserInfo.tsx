import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import DefaultButton from '../atoms/DefaultButton';
import DefaultText from '../atoms/DefaultText';
import { userInfoForm } from '../organisms/Profile';

interface ProfileProps {
    userId: number | null;
    isUpdateMode: boolean;
    isMyProfile: boolean;
    onUpdateMode: () => void;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    form: userInfoForm;
}

const ProfileUserInfo = ({
    userId,
    isMyProfile,
    isUpdateMode,
    onChangeInput,
    onUpdateMode,
    form,
}: ProfileProps) => {
    const nameInputRef = useRef<any>();

    useEffect(() => {
        if (isUpdateMode) nameInputRef.current.focus();
    }, [isUpdateMode]);

    return (
        <UserInfo>
            {isUpdateMode ? (
                <>
                    <NameInput
                        type={'text'}
                        name={'name'}
                        value={form.name}
                        onChange={onChangeInput}
                        ref={nameInputRef}
                    />
                    <StatusMessageInput
                        type={'text'}
                        name={'statusMessage'}
                        onChange={onChangeInput}
                        value={form.statusMessage}
                    />
                </>
            ) : (
                <>
                    <Name text={form.name} bold color="black" size="large" />
                    <StatusMessage text={form.statusMessage} color="black" />
                </>
            )}

            <ChatButton>
                <DefaultButton
                    text={
                        isMyProfile
                            ? isUpdateMode
                                ? '완료'
                                : '프로필 편집'
                            : '1:1 대화하기'
                    }
                    backgroundColor={isMyProfile ? 'mint' : 'violet'}
                    onClick={isMyProfile ? onUpdateMode : () => {}}
                />
            </ChatButton>
        </UserInfo>
    );
};

export default ProfileUserInfo;

const UserInfo = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 0.3;
    width: 100%;
    row-gap: 10px;
`;
const Name = styled(DefaultText)``;
const StatusMessage = styled(DefaultText)``;
const ChatButton = styled.div`
    margin-top: 0.6rem;
    width: 90%;
`;
const StyledInput = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.gray};
    text-align: center;

    &:focus {
        border-bottom: 2px solid ${colors.violet};
    }
`;

const NameInput = styled(StyledInput)`
    color: ${colors.black};
    font-size: 1.2rem;
    font-weight: 700;
`;
const StatusMessageInput = styled(StyledInput)`
    color: ${colors.black};
    font-size: 0.8rem;
    font-weight: normal;
`;
