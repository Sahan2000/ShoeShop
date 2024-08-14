import ImageSlider from "../components/ImageSlider.tsx";

export default function HeroSection() {
    const imageData = [
        { id: 1, image: './src/assets/image1.jpg' },
        { id: 2, image: './src/assets/image2.jpg' },
        { id: 3, image: './src/assets/image3.jpg' },
    ];

    return (
        <div>
            <ImageSlider imageData={imageData} />
        </div>
    );
}