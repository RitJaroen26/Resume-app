export type AwardCategory = 'award' | 'honor' | 'certificate' | 'competition';

export type Award = {
    id: number;
    title: string;
    titleTh: string;
    organization: string;
    organizationTh: string;
    year: string;
    yearTh: string;
    category: AwardCategory;
    categoryLabel: string;
    categoryLabelTh: string;
    description: string;
    descriptionTh: string;
    /** ใส่ path รูปได้หลายรูป เช่น ["/images/awards/cert1.jpg", "/images/awards/cert1-2.jpg"] */
    images: string[];
    color: string;
};

export const awards: Award[] = [
    {
        id: 1,
        title: "Certificate of Poster Presentation — The 9th National Conference on Science, Technology and Innovation",
        titleTh: "เกียรติบัตรการนำเสนอผลงานวิจัยภาคโปสเตอร์ — การประชุมวิชาการระดับชาติ ด้านวิทยาศาสตร์ เทคโนโลยีและนวัตกรรม ครั้งที่ 9",
        organization: "Faculty of Science and Technology, Rajamangala University of Technology Phra Nakhon",
        organizationTh: "คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร",
        year: "Aug 21, 2026",
        yearTh: "21 ส.ค. 2569",
        category: "certificate",
        categoryLabel: "Certificate",
        categoryLabelTh: "เกียรติบัตร",
        description: "Participated in a poster research presentation on “Management System for Sunday Buddhist Study Center, Wat Thang Luang” at the 9th National Conference on Science, Technology and Innovation under the theme “Health Science and Technology Innovation for Sustainable Development.”",
        descriptionTh: "ได้เข้าร่วมการนำเสนอผลงานวิจัยภาคโปสเตอร์ เรื่อง “ระบบบริหารงานศูนย์ศึกษาพระพุทธศาสนาวันอาทิตย์ วัดทางหลวง” ในงานการประชุมวิชาการระดับชาติ ด้านวิทยาศาสตร์ เทคโนโลยีและนวัตกรรม ครั้งที่ 9 ภายใต้หัวข้อ “นวัตกรรมวิทยาศาสตร์สุขภาพและเทคโนโลยีเพื่อการพัฒนาที่ยั่งยืน”",
        images: [
            "/images/awards/ncon-sci-certificate.png",
            "/images/awards/ncon-sci-proceeding.png",
        ],
        color: "from-blue-500 to-cyan-500",
    },
];
