import grandmaImg from 'static/CardsContainer/grandma.png'

export default function Polaroid(props) {
  return (
    <div>
      <div
        className='bg-white border shadow'
        style={{
          padding: '4vw 4vw 6vw',
          width: '70vw',
          transform: 'rotate(-5deg)'
        }}
      >
        <img
          alt='grandma'
          className='w-100'
          src={grandmaImg}
          style={{filter: 'grayscale(0.4)'}}
        />
        <div className='mt-3' style={{fontSize: '20px'}}>감사합니다.<br/>항상 사랑합니다.</div>
        <div style={{fontSize: '18px'}}>3.5.2021</div>
      </div>
    </div>
  )
}
