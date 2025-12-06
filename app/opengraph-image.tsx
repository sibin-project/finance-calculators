import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'SmartMoney Calc - Free Financial Calculators';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                    {/* Logo Icon Mockup */}
                    <div
                        style={{
                            width: 80,
                            height: 80,
                            background: '#3b82f6',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 48,
                            fontWeight: 800,
                            marginRight: 20,
                            color: 'white',
                            fontFamily: 'sans-serif',
                        }}
                    >
                        S
                    </div>
                    <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.02em', fontFamily: 'sans-serif' }}>
                        SmartMoney Calc
                    </div>
                </div>
                <div style={{ fontSize: 32, fontWeight: 500, color: '#94a3b8', fontFamily: 'sans-serif' }}>
                    Free Financial Calculators for India
                </div>
                <div style={{ display: 'flex', gap: 20, marginTop: 40, fontFamily: 'sans-serif' }}>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: 10, fontSize: 20 }}>GST</div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: 10, fontSize: 20 }}>SIP</div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: 10, fontSize: 20 }}>Loans</div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: 10, fontSize: 20 }}>Tax</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
