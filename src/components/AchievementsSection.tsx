import { FC } from 'react';
import AchievementCard from './AchievementCard';
import React from 'react';

const achievements = [
  {
    icon: '/icons/medal.svg',
    title: "World's Greatest Brands & Leaders in Skill Training",
    description: 'Asia & GCC',
    awardedBy: 'PwC'
  },
  {
    icon: '/icons/growth.svg',
    title: 'Fastest Growing Academy of the Decade',
    description: '',
    awardedBy: 'The Beauty Polis'
  },
  {
    icon: '/icons/star.svg',
    title: 'Rising Star of Asia',
    description: '',
    awardedBy: 'The Indo ASEAN Global Investment Summit'
  },
  {
    icon: '/icons/education.svg',
    title: 'Best Education Institute',
    description: '',
    awardedBy: 'Rising Star of Asia'
  },
  {
    icon: '/icons/award.svg',
    title: 'Best Award of Education Excellence',
    description: 'Skill Development Institution',
    awardedBy: ''
  },
  {
    icon: '/icons/beauty.svg',
    title: 'Best Hair and Beauty Institute',
    description: '',
    awardedBy: 'By International Quality Award'
  },
  {
    icon: '/icons/institute.svg',
    title: 'Best Beauty Institute',
    description: '',
    awardedBy: 'Awarded by Global Quality Award'
  },
  {
    icon: '/icons/training.svg',
    title: 'Best Beauty Training Institute Award',
    description: '',
    awardedBy: 'Awarded in Malaysia'
  }
];

const AchievementsSection: FC = () => {
  return (
    <section className="py-16 bg-[#242426]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 font-style-1 bg-gradient-to-r from-[#F8EDAD] to-[#CEAB45] bg-clip-text text-transparent">Achievements and Recognition</h2>
          <p className="text-white">
            At Orane, our passion for enhancing beauty and wellness skills has earned us top industry recognition. The awards
            and accreditations we have received showcase our relentless pursuit of excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              awardedBy={achievement.awardedBy}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;