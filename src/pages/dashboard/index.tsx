import React from "react";
import NewsItem from "@/components/NewsItem";
import PotentialMember from "@/components/PotentialMember";
import RevenueItem from "@/components/RevenueItem";
import StatCard from "@/components/StatCard";
import TrendingPost from "@/components/TrendingPost";
import WatchList from "@/components/WatchList";
import DashboardLayout from "@/layouts/DashboardLayout";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaLink } from "react-icons/fa6";
import { FiUserPlus } from "react-icons/fi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { StockItem } from "@/types";
import OverviewChart from "@/components/OverviewChart";

const data: StockItem[] = [
  {
    symbol: "AAPL",
    price: 142.9,
    change: 0.47,
    data: [10, 12, 15, 14, 18, 12, 16],
  },
  {
    symbol: "BPL",
    price: 142.9,
    change: -0.78,
    data: [11, 13, 16, 15, 18, 12, 14],
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid lg:grid-cols-[3fr_1.5fr] gap-6 mt-8 ">
        <main className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard
              title="Total Channels"
              value="51"
              icon={<FaLink size={24} className="text-emerald-500" />}
            />
            <StatCard
              title="New Members"
              value="125"
              icon={<FiUserPlus size={24} className="text-blue-500" />}
            />
            <StatCard
              title="All Impressions"
              value="789"
              icon={
                <HiMiniArrowTrendingUp size={24} className="text-orange-400" />
              }
            />
          </div>

          <OverviewChart />

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Trending Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <TrendingPost
                title="8 Upcoming Influencer Marketing Trends and Benefits"
                excerpt="Marketing is evolving. It's changing from a one-way street to a two-way conversa..."
                likes={260}
                comments={234}
                shares={123}
              />
              <TrendingPost
                title="How Influencer Marketing Affects Consumer Buying Behavior"
                excerpt="As influencer marketing continues to grow, consumers have been turning to their..."
                likes={260}
                comments={234}
                shares={123}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Potential Members
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <PotentialMember
                name="Wanda Parker"
                username="@ranking1234"
                percentage={10.3}
                isPositive={true}
              />
              <PotentialMember
                name="Terry Brown"
                username="@ranking1234"
                percentage={9.8}
                isPositive={true}
              />
              <PotentialMember
                name="Lucas Holmes"
                username="@ranking1234"
                percentage={6.5}
                isPositive={true}
              />
              <PotentialMember
                name="Janice Miller"
                username="@ranking1234"
                percentage={8.6}
                isPositive={true}
              />
              <PotentialMember
                name="Terry Brown"
                username="@ranking1234"
                percentage={9.8}
                isPositive={true}
              />
            </div>
          </div>
        </main>

        <div>
          <WatchList items={data} onViewAll={() => alert("View All clicked")} />

          <div className="bg-white rounded-lg p-6 my-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Revenue
            </h2>
            <div className="space-y-2">
              <RevenueItem
                amount="$4,000"
                label="Recently Added Pages"
                icon={<FaFacebook size={14} className="text-blue-600" />}
              />
              <RevenueItem
                amount="$2,120"
                label="Video Monetization"
                icon={<BsInstagram size={14} className="text-pink-500" />}
              />
              <RevenueItem
                amount="$1,752"
                label="Community Buildup"
                icon={<BsLinkedin size={14} className="text-blue-700" />}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Trending News
            </h2>
            <div className="space-y-2">
              <NewsItem
                title="Russia & Ukraine War"
                excerpt="Marketing is evolving. It's chang..."
                image="/news-cover.jpg"
              />
              <NewsItem
                title="Elon Musk bought Twitter"
                excerpt="Twitter is the most useful social pl..."
                image="/news-cover.jpg"
              />
              <NewsItem
                title="Fuel Crisis Everywhere"
                excerpt="Due to covid situation in 2020 the..."
                image="/news-cover.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
