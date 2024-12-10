import styled from "styled-components"


export const RecentAdded = () => {
  return (
    <AddedRecent>
        <div className="recently">
            recently
        </div>
    </AddedRecent>
  )
}

const AddedRecent = styled.section`
    display: grid;
    width: 100%;
    height: 100%;

    .recently{
        display: grid;
        grid-template-columns: repeat(5, 1fr)
    }
`
