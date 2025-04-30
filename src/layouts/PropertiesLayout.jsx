import styled from "styled-components"
import { Footer } from "../components/Footer"
import { HeaderProduct } from "../components/HeaderProduct"
import { PropertiesRouter } from "../router/AppRouter"


export const PropertiesLayout = () => {
  return (
    <PropLayout>
        <section className="productslayout">
            <div className="productslayout-header">
                <HeaderProduct headClass={"headproducts blackhead"} />
            </div>
            <div className="productslayout-contain">
                <PropertiesRouter />
            </div>
            <div className="productslayout-footer">
                <Footer />
            </div>
        </section>
    </PropLayout>
  )
}

const PropLayout = styled.section`
.productslayout{
    display: grid;
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &-header{
        z-index: 999;
        display: grid;
        position: sticky;
        width: 100%;
        height: fit-content;
        top: 0;
        
    }

    &-contain{
        display: grid;
    }

    &-footer{
        display: grid;
        width: 100%;
        height: fit-content;
        color: white;
    }
}
`