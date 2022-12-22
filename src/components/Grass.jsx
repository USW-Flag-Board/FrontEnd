import { styled } from '@mui/system';

const Grass = () => {
    return (
        <GrassArea>
            <GrassBox/>
            <GrassBox/>
            <GrassBox/>
        </GrassArea>
    )
}

const GrassArea = styled('div')({
    width: "95%",
    height: "25%",
    marginTop: "10px",
    backgroundColor: "black",
    display: 'flex'
});

const GrassBox = styled('div')({
    width: "33.3%",
    margin: "5px",
    backgroundColor: "white"
});

export default Grass;
