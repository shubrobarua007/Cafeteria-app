import React from 'react';
import "./Testimonials.css";

const Testimonials = () => {
    const testimonials = [
        {
            id: "1",
            name: "Maya, TDR regular since 2015",
            desc: "TDR is a huge part of my life. The staff feels like family and they know just how I like my lassi and paratha!",
            image:"src/assets/woman1.jpg"
        },
        {
            id: "2",
            name: "Brij, new in town",
            desc: "I stumbled upon TDR when I was exploring my new neighborhood. Everyone was so friendly and the food was tasty! Will be back.",
            image:"src/assets/man1.jpg"
        },
        {
            id: "3",
            name: "Safina, lives around the corner",
            desc: "So glad to have a neighborhood eatery, hangout spot and cafe all in one and nearby! Desi food in a comforting atmosphere - need I say more?",
            image:"src/assets/woman2.jpg"
        },
    ];

    return (
        <section className="test-container" id='test'> 
            <div className="test-content">
                <h1>From Our Community</h1>
            </div>
            
            <div className="test-cards">
                {testimonials.map((testimonial) => (
                    <article key={testimonial.id} className="test-card">
                        {testimonial.image && (
                            <img 
                                src={testimonial.image} 
                                alt={`${testimonial.name.split(',')[0]}'s profile`} 
                                className="test-avatar"
                            />
                        )}
                        <h2>{testimonial.name}</h2>
                        <blockquote>{testimonial.desc}</blockquote> {/* Using blockquote for testimonials */}
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;