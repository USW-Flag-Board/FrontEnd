import { styled } from '@mui/system';

const Grass = () => {
    return (
        <GrassArea>
            <GrassBox>
                <GrassItem>
                    <svg>
                        <g>
                            <g>
                                <rect>
                                    
                                </rect>
                            </g>
                        </g>
                    </svg>
                </GrassItem>
                <GrassItem/>
                <GrassItem/>
            </GrassBox>
            <GrassBox>
                <GrassItem/>
                <GrassItem/>
                <GrassItem/>
            </GrassBox>
        </GrassArea>
    )
}

const GrassArea = styled('div')({
    height: "30%",
    width: "100%",
    display: "flex",
});

const GrassBox = styled('div')({
    width: "50%",
    height: "70%",
    display: 'flex',
});

const GrassItem = styled('div')({
    width: "46%",
    margin: "0 5px",
    border: "1px solid #9A9A9A",
    borderRadius: "8px",
});

export default Grass;
