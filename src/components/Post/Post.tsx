import React, { useContext, useState } from "react";
import * as T from "./types";
import * as S from "./style";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { api, getMinutesDifference } from "../../actions";
import { UserContext } from "../../context";
import { Icon } from "../Icon";
import { Modal } from "../Modal";
import { Typography } from "../Typography";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { PostsContext } from "../../context/PostsContext";

export const Post: React.FC<T.PostProps> = ({
  id,
  title,
  created,
  content,
  username,
  ...props
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");
  const context = useContext(UserContext);
  const { refetch } = useContext(PostsContext);

  const newPost = {
    title: newTitle,
    content: newContent,
  } as const;

  async function handleDeletePost(id: number) {
    api.delete(id);
    setIsPopUpOpen(false);
    setTimeout(() => {
      refetch && refetch();
    }, 200);
  }

  async function handleEditPost(id: number) {
    api.edit(id, newPost);
    setIsModalOpen(false);
    setTimeout(() => {
      refetch && refetch();
    }, 200);
  }

  function showPopUp(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsPopUpOpen(true);
  }

  function closePopUp() {
    setIsPopUpOpen(false);
  }

  function showModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <S.Wrapper {...props}>
      <S.Header>
        {title}
        {context.username === username && (
          <S.IconsContainer>
            <Icon onClick={(e) => showPopUp(e)}>
              <DeleteIcon />
            </Icon>
            <Icon onClick={(e) => showModal(e)}>
              <EditIcon />
            </Icon>
          </S.IconsContainer>
        )}
      </S.Header>
      <S.CardContent>
        <S.UserContainer>
          <S.Username>@{username}</S.Username>
          <S.Created>
            {getMinutesDifference(new Date(created))} minutes ago
          </S.Created>
        </S.UserContainer>
        <S.PostContent>{content}</S.PostContent>
      </S.CardContent>
      <Modal isOpen={isPopUpOpen} onClose={() => closePopUp()}>
        <S.PopUp>
          <Typography variant="paragraph">
            Are you sure you want to delete this item?
          </Typography>
          <S.ModalButtonsContainer>
            <Button skin="outlined" onClick={() => closePopUp()}>
              Cancel
            </Button>
            <Button skin="error" onClick={() => handleDeletePost(id)}>
              Delete
            </Button>
          </S.ModalButtonsContainer>
        </S.PopUp>
      </Modal>

      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <S.EditModal>
          <Typography variant="title" as="h2">
            Edit item
          </Typography>
          <Input
            id="input-new-title"
            label="Title"
            value={newTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            id="input-new-content"
            label="Content"
            value={newContent}
            onChange={(e) => setContent(e.target.value)}
          />
          <S.ModalButtonsContainer>
            <Button skin="outlined" onClick={() => closeModal()}>
              Cancel
            </Button>
            <Button skin="success" onClick={() => handleEditPost(id)}>
              Save
            </Button>
          </S.ModalButtonsContainer>
        </S.EditModal>
      </Modal>
    </S.Wrapper>
  );
};
