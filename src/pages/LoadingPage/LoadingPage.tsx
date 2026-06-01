import './LoadingPage.scss'
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle"

export default function LoadingPage(){
  return (
    <section className="loading-page-section">
      <ProgressCircle 
        aria-label="Loading page…"
        value={60}
        size={72}
        isIndeterminate
      />
    </section>
  )
}