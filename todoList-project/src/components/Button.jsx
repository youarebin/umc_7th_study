function Button({ onDelete, isEditing, onEdit, onUpdate }) {
    return (
        <>
            <button onClick={onDelete}>삭제하기</button>
            {isEditing ? (
                <button onClick={onUpdate}>수정 완료</button>
            ) : (
                <button onClick={onEdit}>수정 진행</button>
            )}
        </>
    );
}

export default Button;