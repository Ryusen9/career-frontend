import Lottie from "lottie-react"
import LoadingLottie from "../../public/Lottie/Animation - 1739630572271.json"

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
        <Lottie animationData={LoadingLottie} />
    </div>
  )
}

export default LoadingPage