const QuestionRow_gray = ({faqs}) => {
  return (
    <section id="section-faq-2" data-bgcolor="#1c1e20">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="s2"><span className="id-color">PreakastEv</span> SORULAR</h3>
                </div>

                <div className="col-md-9">

                    <div className="expand-group">
                        {faqs.map((faq, index) => (
                            index >= 5 && index < 10 ?
                            <div key={index} className="expand">
                                <h4>{faq.question}</h4>
                                <div className="hidden-content">
                                    {faq.answer}
                                </div>
                            </div>
                            : null
                        ))}

                    </div>


                </div>


            </div>
        </div>
    </section>
  )
}

export default QuestionRow_gray