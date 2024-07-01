import QuadroBox from '../../Quadro/QuadroBox'
import QuadroContent from '../../Quadro/QuadroContent'
import QuadroHeader from '../../Quadro/QuadroHeader'
import QuadroRoot from '../../Quadro/QuadroRoot'
import QuadroText from '../../Quadro/QuadroText'
import QuadroTitle from '../../Quadro/QuadroTitle'

export default function PageOne() {
    return (
        <QuadroRoot>
            <QuadroHeader>
                <QuadroBox style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <QuadroTitle value="Easily manage as a " />
                    <QuadroTitle className="responsive-title orange" value="&nbsp;Toggle!" />
                </QuadroBox>
            </QuadroHeader>
            <QuadroContent>
                <QuadroBox style={{ display: 'flex', height: '100%' }}>
                    <QuadroBox style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '50%' }}>
                        <img src="/phone.png" style={{ width: '300px', height: 'auto' }} />
                    </QuadroBox>
                    <QuadroBox style={{ marginLeft: '65px' }}>
                        <QuadroBox style={{ display: 'flex', flexDirection: 'column', marginTop: '25px' }}>
                            <QuadroText value="add an admin" />
                            <QuadroText style={{ marginBottom: '7px' }} value="passwordless" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Never be afraid to give your" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Instagram account to a" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="stranger freelancer, or agency." />
                            <img src="/on.png" style={{ width: '75px', height: 'auto', margin: '10px 0' }} />
                        </QuadroBox>
                        <QuadroBox style={{ display: 'flex', flexDirection: 'column' }}>
                            <QuadroText value="send & schedule" />
                            <QuadroText style={{ marginBottom: '7px' }} value="posts" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Never be afraid to give your" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Instagram account to a" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="stranger freelancer, or agency." />
                            <img src="/off.png" style={{ width: '75px', height: 'auto', margin: '10px 0' }} />
                        </QuadroBox>
                        <QuadroBox style={{ display: 'flex', flexDirection: 'column' }}>
                            <QuadroText style={{ marginBottom: '7px' }} value="approve contents" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Never be afraid to give your" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="Instagram account to a" />
                            <QuadroText className='responsive-text gray' style={{ fontWeight: 'bold' }} value="stranger freelancer, or agency." />
                            <img src="/off.png" style={{ width: '75px', height: 'auto', margin: '10px 0' }} />
                        </QuadroBox>
                    </QuadroBox>
                </QuadroBox>
            </QuadroContent>
        </QuadroRoot>
    )
}
