import React, { useContext, useState } from "react";
import * as T from "./types";
import * as S from "./style";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { UserContext, PostsContext } from "../../context";
import { Icon, Modal, Typography, Button, Input, TextArea, Loading } from "../";
import { getMinutesDifference } from "../../utils";

export const Post: React.FC<T.PostProps> = ({
  id,
  title,
  created,
  content,
  username,
  ...props
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");
  const context = useContext(UserContext);
  const { isLoading, DELETE_POST, EDIT_POST } = useContext(PostsContext);

  function handleDeletePost() {
    DELETE_POST(id);
    setIsDeleteModalOpen(false);
  }

  function handleEditPost() {
    EDIT_POST(id, {
      title: newTitle,
      content: newContent,
    });
    setIsEditModalOpen(false);
  }

  function showDeleteModal(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function showEditModal(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.preventDefault();
    setIsEditModalOpen(true);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Wrapper {...props}>
      <S.Header title={title}>
        {context.username === username && (
          <S.IconsContainer>
            <Icon onClick={(e) => showDeleteModal(e)}>
              <DeleteIcon />
            </Icon>
            <Icon onClick={(e) => showEditModal(e)}>
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
      <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
        <S.PopUp>
          <Typography variant="paragraph">
            Are you sure you want to delete this item?
          </Typography>
          <S.ModalButtonsContainer>
            <Button skin="outlined" onClick={closeDeleteModal}>
              Cancel
            </Button>
            <Button skin="error" onClick={handleDeletePost} autoFocus>
              Delete
            </Button>
          </S.ModalButtonsContainer>
        </S.PopUp>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={closeEditModal}>
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
            rows={4}
            cols={50}
          />
          <S.ModalButtonsContainer>
            <Button skin="outlined" onClick={closeEditModal}>
              Cancel
            </Button>
            <Button skin="success" onClick={handleEditPost}>
              Save
            </Button>
          </S.ModalButtonsContainer>
        </S.EditModal>
      </Modal>
    </S.Wrapper>
  );
};
