import React from 'react'; 
import { useState } from 'react';
import { Group } from '@/types/group'; 

interface GroupMenuProps {
  groups: Group[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const GroupMenu: React.FC<GroupMenuProps> = ({ groups, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

    const onClick = (id: number) => {
        console.log(`Group with id ${id} was clicked.`);
    };

    const groupList = groups.map((group) => {
        const color = JSON.parse(group.color);
        return { ...group, color };
    });

    console.log(groupList); 

    const onGroupClick = (groupList: Group) => {
        setSelectedGroup(groupList); // 選択されたグループを更新
        setIsOpen(false); // ドロップダウンメニューを閉じる
    }; 

  return (
    <div className="relative inline-block text-left w-4/5 mx-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">グループ：Group</label>
        <div className='flex items-center'>
        {selectedGroup && (
            <div 
                className="w-4 h-4 mx-4" 
                style={{ backgroundColor: `rgba(${selectedGroup.color.r}, ${selectedGroup.color.g}, ${selectedGroup.color.b}, ${selectedGroup.color.a})`}} 
                aria-label="Selected group color"
            ></div>
            )}
            <input onChange={(e)=>onChange(e)} name="group_id" onClick={toggleDropdown} value={selectedGroup ? selectedGroup.id : ''} id="dropdownButton" className={"${isOpen ? 'w-4/5' : 'w-full'} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"} placeholder=' グループを選択' />
        </div>
      {/* ドロップダウンメニュー */}
      <div className={`${isOpen ? 'block' : 'hidden'} z-10 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700`} id="dropdown">
        <ul className="w-full py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
          {groupList.map((group) => (
            <li key={group.id} className='w-full'>
              <button type="button" className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => onGroupClick(group)}>
                <div className="flex items-center">
                  <div className="w-4 h-4 mx-4" style={{backgroundColor: `rgba(${group.color.r},${group.color.g},${group.color.b},${group.color.a})`}}></div>
                  <p>{group.name}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default GroupMenu;
